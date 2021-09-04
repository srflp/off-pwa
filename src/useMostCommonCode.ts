import { debounce } from 'lodash/fp';
import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import { DetectedBarcode } from './BarcodeDetectorTypes';

export function useMostCommonCode(n: number, setCode: Dispatch<SetStateAction<string>>) {
  const [lastPushedCode, setLastPushedCode] = useState<DetectedBarcode>();
  const [codes, setCodes] = useState<string[]>(Array(n).fill(''));

  const clearLastPushedCode = useMemo(() => debounce(100, () => setLastPushedCode(undefined)), []);

  function pushCode(barcode: DetectedBarcode) {
    setLastPushedCode(barcode);
    setCodes(codes => {
      const [, ...newCodes] = codes.concat(barcode.rawValue);
      return newCodes;
    });
    clearLastPushedCode();
  }

  setCode(mode(codes));

  return [pushCode, lastPushedCode] as const;
}

// https://stackoverflow.com/questions/1053843/get-the-element-with-the-highest-occurrence-in-an-array
function mode(array: string[]) {
  if (array.length == 0) return '';
  const modeMap: Record<string, number> = {};
  let maxEl = array[0];
  let maxCount = 1;
  for (var i = 0; i < array.length; i++) {
    var el = array[i];
    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;
    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
}
