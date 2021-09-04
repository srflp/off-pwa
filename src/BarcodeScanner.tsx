import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { useAnimationFrame } from './useAnimationFrame';
import { useDebug } from './useDebug';
import { useMostCommonCode } from './useMostCommonCode';
import { useUserMedia } from './useUserMedia';

interface Props {
  toggle?: boolean;
  setCode: Dispatch<SetStateAction<string>>;
  setScansCount: Dispatch<SetStateAction<number>>;
}

export const isBarcodeDetectorSupported =
  typeof window !== 'undefined' && 'BarcodeDetector' in window;

const barcodeDetector =
  isBarcodeDetectorSupported && new BarcodeDetector({ formats: ['ean_8', 'ean_13'] });

export default function BarcodeScanner({ toggle = true, setCode, setScansCount }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasCtx = canvasRef.current?.getContext('2d');
  const [isCameraReady, setIsCameraReady] = useState(false);
  const mediaStream = useUserMedia({
    video: {
      facingMode: 'environment',
      aspectRatio: window.innerHeight / window.innerWidth,
      width: window.innerHeight,
    },
  });
  const [pushBarcode, lastPushedBarcode] = useMostCommonCode(11, setCode);
  const debug = useDebug();

  useAnimationFrame(
    async (fps: number) => {
      if (toggle && isCameraReady && videoRef.current && canvasCtx && barcodeDetector) {
        canvasCtx.drawImage(videoRef.current, 0, 0);

        // FPS
        if (debug) {
          canvasCtx.font = '16px Arial';
          canvasCtx.fillStyle = 'rgba(0, 0, 0, 1)';
          canvasCtx.fillRect(0, 0, 50, 20);
          canvasCtx.fillStyle = 'rgba(255, 255, 255, 1)';
          canvasCtx.fillText(`${fps} fps`, 0, 16);
        }

        // green Barcode illumination
        canvasCtx.fillStyle = 'rgba(0, 255, 0, 0.6)';
        if (lastPushedBarcode) {
          canvasCtx.beginPath();
          canvasCtx.moveTo(
            lastPushedBarcode.cornerPoints[0].x,
            lastPushedBarcode.cornerPoints[0].y,
          );
          canvasCtx.lineTo(
            lastPushedBarcode.cornerPoints[1].x,
            lastPushedBarcode.cornerPoints[1].y,
          );
          canvasCtx.lineTo(
            lastPushedBarcode.cornerPoints[2].x,
            lastPushedBarcode.cornerPoints[2].y,
          );
          canvasCtx.lineTo(
            lastPushedBarcode.cornerPoints[3].x,
            lastPushedBarcode.cornerPoints[3].y,
          );
          canvasCtx.lineTo(
            lastPushedBarcode.cornerPoints[0].x,
            lastPushedBarcode.cornerPoints[0].y,
          );
          canvasCtx.closePath();
          canvasCtx.fill();
        }

        barcodeDetector.detect(videoRef.current).then(barcodes => {
          if (barcodes.length > 0) {
            pushBarcode(barcodes[0]);
            setScansCount(c => c + 1);
          }
        });
      }
    },
    [toggle, isCameraReady, lastPushedBarcode, debug],
  );

  if (videoRef.current && !videoRef.current.srcObject && mediaStream) {
    videoRef.current.srcObject = mediaStream;
  }

  return (
    <>
      <video
        autoPlay
        ref={videoRef}
        onPlay={() => {
          if (canvasRef.current && videoRef.current) {
            canvasRef.current.style.display = 'block';
          }
          setIsCameraReady(true);
        }}
        style={{ display: 'none' }}
      />
      <canvas
        ref={canvasRef}
        height={window.innerHeight}
        width={window.innerWidth}
        style={{ display: 'none', width: '100vw', height: '100vh', maxWidth: '100%' }}
      />
    </>
  );
}
