import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import DropzonePlaceholder from './placeholder/DropzonePlaceholder';
import { Wrapper, DropZoneStyle } from './style'

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

  onDrop(files) {
    this.setState({
      files
    })
  }

  onDrag(e) {
    this.setState({
      dragged : true
    })
  }

  onDragOut(e) {
    this.setState({
      dragged : false
    })
  }

  render() {
    return (
      <Wrapper>
        <DropzoneStylized 
          accept={FileAllowed} 
          onDrop={ this.onDrop.bind(this) } 
          onDragEnter={ this.onDrag.bind(this) }
          onDragLeave={ this.onDragOut.bind(this) }
        >
          { this.state.files.length ? '' : <DropzonePlaceholder dragged={this.state.dragged} /> }
        </DropzoneStylized>

        <aside>
          <h2>Dropped files</h2>
          <ul>
            {
              this.state.files.map(f => <li>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
      </Wrapper>
      );
  }
}

export default App;
