import React from 'react';
import './ProjectsPage.css';

function renderImage(repo){
    switch(repo.language){
        case 'TypeScript':
            return <img src="./images/typescript.jpg" alt="typescript" className="image"/>;
        case 'JavaScript':
            return <img src="./images/javascript.jpg" alt="typescript" className="image"/>;
        case 'Python':
            return <img src="./images/python.jpg" alt="python" className="image"/>;
        case 'C++':
                return <img src="./images/cpp.jpg" alt="c++" className="image"/>;
        case 'C#':
                return <img src="./images/csharp.jpg" alt="csharp" className="image"/>;
        case 'Java':
                return <img src="./images/java.jpg" alt="java" className="image"/>;
        case 'PHP':
                return <img src="./images/php.jpg" alt="php" className="image"/>;
        case 'google-drive':
        case 'website':
                return <img src={repo.pic} alt="drive" className="image"/>;
        default:
                return <img src="./images/otrs.jpg" alt="others" className="image"/>;   
    }
}

function renderList(repos) {
    if (repos != null) {
        return repos.map((repo) => (
            <div key={repo.node_id} className="repo">
                <span>{repo.name}</span>
                {renderImage(repo)}
                {
                    repo.language === 'google-drive'?
                    <a href={repo.url} target="_black" className="drive">Drive</a> : 
                    repo.language === 'website'?
                    <a href={repo.url} target="_black" className="site" style={{backgroundImage: `url(${repo.favicon})`}}>Link</a> : 
                    <a href={repo.html_url} target="_black" className="git">Git</a>
                }
            </div>
       ))
    }
    return <div>Empty List</div>
}

function ProjectsPage(props) {

    return (
        <div>
            {renderList(props.repos)}
        </div>
    )
}

export default ProjectsPage;