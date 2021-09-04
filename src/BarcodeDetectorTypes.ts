// Barcode Detector API Types
// remove these types after they get implemented in TypeScript

type BarcodeFormat =
  | 'aztec'
  | 'code_128'
  | 'code_39'
  | 'code_93'
  | 'codabar'
  | 'data_matrix'
  | 'ean_13'
  | 'ean_8'
  | 'itf'
  | 'pdf417'
  | 'qr_code'
  | 'upc_a'
  | 'upc_e'
  | 'unknown';

interface CornerPoint {
  x: number;
  y: number;
}

export interface DetectedBarcode {
  boundingBox: DOMRectReadOnly;
  cornerPoints: [CornerPoint, CornerPoint, CornerPoint, CornerPoint];
  format: BarcodeFormat;
  rawValue: string;
}

interface BarcodeDetector {
  detect(image: ImageBitmapSource): Promise<DetectedBarcode[]>;
  getSupportedFormats(): Promise<BarcodeFormat[]>;
}

interface BarcodeDetectorOptions {
  formats: BarcodeFormat[];
}

declare global {
  var BarcodeDetector: {
    prototype: BarcodeDetector;
    new (barcodeDetectorOptions?: BarcodeDetectorOptions): BarcodeDetector;
  };
}

export {};
