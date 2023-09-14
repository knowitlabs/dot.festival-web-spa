import { co2 } from '@tgwf/co2';

export const getBytesTransferred = (): number => {
  const initialValue = 0;
  const sumWithInitial = performance
    .getEntries()
    .reduce(
      (
        accumulator,
        currentValue: PerformanceNavigationTiming | PerformanceResourceTiming
      ) =>
        accumulator +
        (currentValue.transferSize ? currentValue.transferSize : 0),
      initialValue
    );

  return sumWithInitial;
};

export const getEmissions = () => {
  const emissions = new co2();
  const bytesSent = getBytesTransferred(); // 1GB expressed in bytes
  const greenHost = true; // Is the data transferred from a green host?
  const estimatedCO2 = emissions.perByte(bytesSent, greenHost).toFixed(3); // We use toFixed(3) here to set the result to 3 decimal places.

  return estimatedCO2;
};
