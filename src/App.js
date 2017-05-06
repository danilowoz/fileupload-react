import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import DropzonePlaceholder from './placeholder/DropzonePlaceholder';
import { Wrapper, DropZoneStyle, ButtonClean } from './style'
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

    this.onRemove = this.onRemove.bind(this)
    this.onRemoveAll = this.onRemoveAll.bind(this)
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

  onRemove(props) {
    let oldFiles = this.state.files
    let files = oldFiles.filter(f => {
      debugger;
      return f.name !== props.name && f.size !== props.size
    })

    this.setState({
      files
    })
  }

  onRemoveAll() {
    this.setState({ 
      files: []
    })
  }

  render() {

    let filesUploaded = this.state.files.map((f, key) => {
      return <FileItem key={key} name={f.name} size={f.size} situation={f.situation} remove={this.onRemove} />
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
        { this.state.files.length ? <ButtonClean onClick={this.onRemoveAll}>Remove all</ButtonClean> : '' }
      </Wrapper>
      );
  }
}

export default App;
