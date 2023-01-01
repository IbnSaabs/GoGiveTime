// import Header from '../Interest/Header';
import InterestPageLayout from '../Interest/InterestPageLayout';

export const AuthPageLayout = ({children, text, path}) => {
    
    return( 
        <div>          
            <InterestPageLayout 
             btnText={text}
             btnPath={path}
             className='relative h-[calc(100vh-73px)] flex justify-center'
            >
                {children}
            </InterestPageLayout>
        </div>
    )
}

