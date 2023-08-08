import { of, delay, take } from 'rxjs';
import { useObservable } from 'rxjs-hooks';

export const useDelay = (delayTime: number) => {
    const observable = of(true).pipe(delay(delayTime), take(1));
    return useObservable(() => observable, false);
};
