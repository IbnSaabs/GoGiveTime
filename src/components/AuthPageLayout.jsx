import PatternTop from '../assets/pattern-top.svg';
import PatternBottom from '../assets/pattern-bottom.svg';

export const AuthPageLayout = (children) => {
    return(
        <div class="container">
            <div class="absolute object-left-top z-0"><img src={PatternTop} /></div>
            <div class="z-10">{children}</div>
            <div class="absolute object-right-bottom z-0"><img src={PatternBottom} /></div>
        </div>
    )
}