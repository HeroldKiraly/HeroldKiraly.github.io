let portfolioItems = [
    {
        title: 'Product Card',
        imgURL: './images/product-preview-card-desktop.png',
        stack: ['HTML', 'CSS', 'JavaScript'],
        projectURL: 'https://product-preview-card-component-main-three.vercel.app/',
        githubURL: 'https://github.com/HeroldKiraly/product-preview-card-component-main',
        wip: false,
    },
    {
        title: 'Tip Splitter App',
        imgURL: './images/tip-calculator-desktop.png',
        stack: ['HTML', 'CSS', 'JavaScript'],
        projectURL: 'https://tip-calculator-app-main-gilt.vercel.app/',
        githubURL: 'https://github.com/HeroldKiraly/tip-calculator-app-main',
        wip: false,
    },
    {
        title: 'Multi Step Form',
        imgURL: './images/multi-step-form-desktop.png',
        stack: ['Vite', 'React', 'JavaScript'],
        projectURL: 'https://multi-step-form-main-six.vercel.app/',
        githubURL: 'https://github.com/HeroldKiraly/multi-step-form-main',
        wip: true,
    },
    {
        title: 'Advice Generator',
        imgURL: './images/advice-generator-desktop.png',
        stack: ['HTML', 'CSS', 'JavaScript', 'API'],
        projectURL: 'https://advice-generator-app-main-wheat.vercel.app/',
        githubURL: 'https://github.com/HeroldKiraly/advice-generator-app-main',
        wip: false,
    },
    {
        title: 'Rating Component',
        imgURL: './images/interactive-rating-desktop.png',
        stack: ['HTML', 'CSS', 'JavaScript'],
        projectURL: 'https://interactive-rating-component-main-weld.vercel.app/',
        githubURL: 'https://github.com/HeroldKiraly/interactive-rating-component-main',
        wip: false,
    },
    {
        title: 'Ecommerce Site',
        imgURL: './images/watch-ecommerce.png',
        stack: ['HTML', 'React', 'Python', 'Flask'],
        projectURL: '#section-two',
        githubURL: '#',
        wip: true,
    },
    {
        title: 'Google Search Remake',
        imgURL: './images/google-search-remake.png',
        stack: ['HTML', 'CSS'],
        projectURL: 'https://google-search-remake.vercel.app/',
        githubURL: 'https://github.com/HeroldKiraly/google-search-remake',
        wip: false,
    },
    {
        title: 'This Website',
        imgURL: './images/my-portfolio-desktop.png',
        stack: ['HTML', 'Sass', 'JavaScript', 'React'],
        projectURL: '#',
        githubURL: 'https://github.com/HeroldKiraly/HeroldKiraly.github.io',
        wip: true,
    },
];

const PortfolioItem = ({title, imgURL, stack, projectURL, githubURL, wip}) => {
    return (
        <div className="grid-item" href="#">
            <div className="grid-image">
                <a href={projectURL}>
                    <img src={imgURL} />
                </a>
            </div>
            <div className="grid-item-info">
                <h4>{title}{wip ? <span>*</span> : <span></span>}</h4>
                <div className="stack-container">
                    {stack.map(stackItem => (
                        <p className="tech-stack">{stackItem}</p>
                    ))}
                </div>
                <div className="links-container">
                    <a href={githubURL}><p className="links"><i class="fa-brands fa-github"></i>Github</p></a>
                    <a href={projectURL}><p className="links"><i class="fa-solid fa-link"></i>LiveSite</p></a>
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
                    githubURL={item.githubURL}
                    wip={item.wip}
                />
            ))}
        </div>
    )
}

const container = document.getElementById('portfolio');
const root = ReactDOM.createRoot(container);
root.render(<Portfolio />);