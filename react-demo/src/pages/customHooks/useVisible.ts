import {useState, useEffect} from 'react';

export default function useVisible(root: React.RefObject<HTMLElement>, rootMargin?: string) {
    const [visible, setVisible] = useState<boolean>();

    useEffect(() => {
        const observer = new IntersectionObserver(
            function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        setVisible(true);
                    } else {
                        setVisible(false);
                    }
                });
            }, 
            {
                rootMargin
            }
        );

        if (root.current) {
            observer.observe(root.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [root, rootMargin]);

    return visible;
}
