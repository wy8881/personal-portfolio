import {Container} from "react-bootstrap";
import {GitHubCalendar} from 'react-github-calendar';
import {useState, useEffect, useRef} from "react";

export const GitHubContributions = () => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);
    const SHOWNMOTH = 6;
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { 
                threshold: 0.3,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    const selectMonths = contributions =>{
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        const showMonth = SHOWNMOTH;
        return contributions.filter(activity =>{
            const date = new Date(activity.date);
            const monthOfDay = date.getMonth();
            return (
                date.getFullYear() === currentYear &&
                monthOfDay <= currentMonth &&
                monthOfDay > currentMonth - showMonth
            )
        });
    };
    
    return (
        <section className="github-contributions" id="contributions">
            <Container>
                <div ref={cardRef} className={`contrib-card ${isVisible ? 'visible' : ''}`}>
                    <h1 className="text-center">GitHub Contribution</h1>
                    <div className="contrib-wrapper">
                        <GitHubCalendar 
                            username="wy8881" 
                            blockSize={14}
                            blockRadius={7}
                            blockMargin={5}
                            fontSize={16}
                            colorScheme="light"
                            transformData={selectMonths}
                            labels={{
                                totalCount: '{{count}} contributions',
                              }}
                            theme={{
                                light: ['#fbeaf7', '#f4bfe2', '#e58bcc', '#d254b0', '#9c2b84'],
                                dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
                            }}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

