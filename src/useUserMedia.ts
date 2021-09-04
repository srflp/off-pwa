import { useEffect, useState } from 'react';

export function useUserMedia(mediaConstraints: MediaStreamConstraints) {
  const [mediaStream, setMediaStream] = useState<MediaStream>();

  useEffect(() => {
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(mediaConstraints);
        setMediaStream(stream);
      } catch (err) {
        console.error('Camera error: ' + err);
      }
    }
    if (!mediaStream) {
      enableStream();
    }
  }, [mediaStream, mediaConstraints]);

  return mediaStream;
}
