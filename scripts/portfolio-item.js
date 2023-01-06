let portfolioItems = [
    {
        title: 'Product Card',
        imgURL: './images/product-preview-card-desktop.png',
        stack: ['HTML', 'CSS', 'JavaScript'],
        projectURL: 'https://product-preview-card-component-main-three.vercel.app/'
    },
    {
        title: 'Tip Splitter App',
        imgURL: './images/tip-calculator-desktop.png',
        stack: ['HTML', 'CSS', 'JavaScript'],
        projectURL: 'https://tip-calculator-app-main-gilt.vercel.app/'
    },
    {
        title: 'Advice Generator',
        imgURL: './images/advice-generator-desktop.png',
        stack: ['HTML', 'CSS', 'JavaScript', 'API'],
        projectURL: 'https://advice-generator-app-main-wheat.vercel.app/'
    },
    {
        title: 'Rating Component',
        imgURL: './images/interactive-rating-desktop.png',
        stack: ['HTML', 'CSS', 'JavaScript'],
        projectURL: 'https://interactive-rating-component-main-weld.vercel.app/'
    },
    {
        title: 'Finance Account Site',
        imgURL: './images/.png',
        stack: ['HTML', 'CSS', 'Python', 'Flask'],
        projectURL: 'https://interactive-rating-component-main-weld.vercel.app/'
    },
    {
        title: 'Ecommerce Site',
        imgURL: './images/.png',
        stack: ['HTML', 'React', 'Python', 'Flask'],
        projectURL: 'https://interactive-rating-component-main-weld.vercel.app/'
    },
    {
        title: 'Reddit Client',
        imgURL: './images/.png',
        stack: ['HTML', 'Sass', 'JavaScript', 'React'],
        projectURL: '#'
    },
    {
        title: 'This Website',
        imgURL: './images/my-portfolio-desktop.png',
        stack: ['HTML', 'Sass', 'JavaScript', 'React'],
        projectURL: '#'
    },
];

const PortfolioItem = ({title, imgURL, stack, projectURL}) => {
    return (
        <div className="grid-item" href="#">
            <div className="grid-image">
                <a href={projectURL}>
                    <img src={imgURL} />
                </a>
            </div>
            <div className="grid-item-info">
                <h4>{title}</h4>
                <div className="stack-container">
                    {stack.map(stackItem => (
                        <p className="tech-stack">{stackItem}</p>
                    ))}
                </div>
            </div>
        </div>    
    )
}

const Portfolio = () => {
    return (
        <div className="portfolio-grid-container">
            {portfolioItems.map(item => (
                <PortfolioItem 
                    title={item.title}
                    imgURL={item.imgURL}
                    stack={item.stack}
                    projectURL={item.projectURL}
                />
            ))}
        </div>
    )
}

const container = document.getElementById('portfolio');
const root = ReactDOM.createRoot(container);
root.render(<Portfolio />);