import { BehaviorSubject } from 'rxjs';
import { useObservable } from 'rxjs-hooks';

export const Store = new BehaviorSubject('test');
export const useStoreValue = (): [string, (value: string) => void] => [
    useObservable(() => Store, ''),
    Store.next
];
