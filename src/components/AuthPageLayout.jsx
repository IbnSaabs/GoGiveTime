import { Link } from 'react-router-dom';

import PatternTop from '../assets/pattern-top.svg';
import PatternBottom from '../assets/pattern-bottom.svg';


// const AuthNavbar = (path, text) => {
//     return(                  
//         <nav style={{backgroound: 'red'}} className='w-full p-2'>
//             <div className='object-right'><Link to={path}>{text}</Link></div>
//         </nav>
//     )
// }

export const AuthPageLayout = ({path, text, Children}) => {
    
    return( 
        <div> 
            <div className="container">                                
                <nav style={{backgroound: 'red'}} className='w-full p-2'>
                    <div className='object-right'><Link to={path}>{text}</Link></div>
                </nav>
                <div className="absolute left-0 top-0 z-0"><img src={PatternTop} /></div>
                <div className="z-10 absolute top-0">{Children}</div>
                <div className="absolute right-0 bottom-0 z-0"><img src={PatternBottom} /></div>
            </div>
        </div>
    )
}

