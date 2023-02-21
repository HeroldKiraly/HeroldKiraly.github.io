let portfolioItems = [
    {
        title: 'Product Card',
        imgURL: './images/product-preview-card-desktop.webp',
        stack: ['HTML', 'CSS', 'JavaScript'],
        projectURL: 'https://product-preview-card-component-main-three.vercel.app/',
        githubURL: 'https://github.com/HeroldKiraly/product-preview-card-component-main',
        wip: false,
    },
    {
        title: 'Tip Splitter App',
        imgURL: './images/tip-calculator-desktop.webp',
        stack: ['HTML', 'CSS', 'JavaScript'],
        projectURL: 'https://tip-calculator-app-main-gilt.vercel.app/',
        githubURL: 'https://github.com/HeroldKiraly/tip-calculator-app-main',
        wip: false,
    },
    {
        title: 'Multi Step Form',
        imgURL: './images/multi-step-form-desktop.webp',
        stack: ['Vite', 'React', 'JavaScript'],
        projectURL: 'https://multi-step-form-main-six.vercel.app/',
        githubURL: 'https://github.com/HeroldKiraly/multi-step-form-main',
        wip: true,
    },
    {
        title: 'Advice Generator',
        imgURL: './images/advice-generator-desktop.webp',
        stack: ['HTML', 'CSS', 'JavaScript', 'API'],
        projectURL: 'https://advice-generator-app-main-wheat.vercel.app/',
        githubURL: 'https://github.com/HeroldKiraly/advice-generator-app-main',
        wip: false,
    },
    {
        title: 'Rating Component',
        imgURL: './images/interactive-rating-desktop.webp',
        stack: ['HTML', 'CSS', 'JavaScript'],
        projectURL: 'https://interactive-rating-component-main-weld.vercel.app/',
        githubURL: 'https://github.com/HeroldKiraly/interactive-rating-component-main',
        wip: false,
    },
    {
        title: 'Google Search Remake',
        imgURL: './images/google-search-remake.webp',
        stack: ['HTML', 'CSS'],
        projectURL: 'https://google-search-remake.vercel.app/',
        githubURL: 'https://github.com/HeroldKiraly/google-search-remake',
        wip: false,
    },
    {
        title: 'Ecommerce Site',
        imgURL: './images/watch-ecommerce.webp',
        stack: ['HTML', 'React', 'Python', 'Flask'],
        projectURL: '#section-two',
        githubURL: '#',
        wip: true,
    },
    {
        title: 'Web3 dApp',
        imgURL: './images/web3-dapp.webp',
        stack: ['NextJS', 'TailwindCSS', 'Moralis'],
        projectURL: '#',
        githubURL: 'https://github.com/HeroldKiraly/web3-dapp',
        wip: true,
    },
    {
        title: 'This Website',
        imgURL: './images/my-portfolio-desktop.webp',
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
                    <img src={imgURL} loading="lazy" alt="Portfolio project image"/>
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