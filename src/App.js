import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import DropzonePlaceholder from './placeholder/DropzonePlaceholder';
import { Wrapper, DropZoneStyle } from './style'
import FileItem from './FileItem'

const DropzoneStylized = DropZoneStyle(Dropzone)
const FileAllowed = 'image/jpeg, image/jpg, application/pdf,application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document'

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = { 
      files: [],
      dragged: false
    }
  }

  onDrop(accepted, rejected) {
    accepted = accepted.map(i => {
      i.situation = 'accepted'
      return i
    })
    rejected = rejected.map(i => {
      i.situation = 'rejected'
      return i
    })

    let files = [...accepted, ...rejected]

    this.setState({
      dragged: false,
      files
    })
  }

  onDrag(e) {
    this.setState({
      dragged: true
    })
  }

  onDragOut(e) {
    this.setState({
      dragged: false
    })
  }

  render() {

    let filesUploaded = this.state.files.map((f, key) => {
      return <FileItem key={key} name={f.name} size={f.size} situation={f.situation} />
    })

    return (
      <Wrapper>
        <DropzoneStylized 
          accept={FileAllowed} 
          onDrop={ this.onDrop.bind(this) } 
          onDragEnter={ this.onDrag.bind(this) }
          onDragLeave={ this.onDragOut.bind(this) }
          dragged={this.state.dragged} 
        >
          { this.state.files.length ? filesUploaded : <DropzonePlaceholder dragged={this.state.dragged} /> }
        </DropzoneStylized>

        <aside>
            
        </aside>
      </Wrapper>
      );
  }
}

export default App;
