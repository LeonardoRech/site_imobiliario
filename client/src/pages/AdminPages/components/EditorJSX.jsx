import  {  Editor  }  from  "react-draft-wysiwyg" ; 
import  "react-draft-wysiwyg/dist/react-draft-wysiwyg.css" ;

export default function EditorJSX(props){

    return(
        <div className={`rounded-md border border-yellow-400`}>
            < Editor 
                name={props.name}
                value={props.value}
                toolbarClassName = "toolbarClassName" 
                wrapperClassName = "wrapperClassName" 
                editorClassName = "editorClassName"
            /> 
        </div>
    )
}