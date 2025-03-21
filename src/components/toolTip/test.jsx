import ToolTip from './index'
import './toolTip.css'

export default function ToolTipTest(){
    return (
        <div>
            <h1>ToolTip</h1>
            <ToolTip delay={0} content={"ToolTip content"} children={<p>Hover me</p>}/>
        </div>
    )
}