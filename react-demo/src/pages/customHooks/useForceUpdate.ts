import { useState } from 'react';

export default function useForceUpdate() {
    const [,setTick] = useState<number>(0)
    return () => setTick(t => t + 1)
}