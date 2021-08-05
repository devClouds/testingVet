import { Button } from 'bootstrap'
import React, {Fragment} from 'react'
import Section from './Section'

function Footer() {
    return (
        <Fragment>
            <button id="scroll-top-button" title="Go to the top"><i class="fas fa-angle-double-up"></i></button>
            <Section name="footer">
                <div className="justify-content-center text-center">
                    <p>Copyright &copy; 2021 - <a href="https://www.linkedin.com/in/krzysztof-piasecki-784304b9/">Krzysztof Piasecki</a></p>
                    {/*<p><div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>--></p>*/}
                </div>
            </Section>
        </Fragment>
    )
}

export default Footer
