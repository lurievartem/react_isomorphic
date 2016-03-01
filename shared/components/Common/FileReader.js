import React, { Component, PropTypes } from 'react';

class FileRead extends Component{
    constructor(props){
        super(props);
        this.files = [];
        this.loadedFiles = [];
    }

    static propTypes = {
        onChange: PropTypes.func.isRequired,
        multiple: PropTypes.bool,
        fileInput: PropTypes.bool,
        fileArea: PropTypes.bool,
        fileAreaClassName: PropTypes.string,
        validMimeTypes: PropTypes.array
    };

    static defaultProps = {
        multiple: true,
        fileInput: true,
        fileArea: true,
        validMimeTypes: ['image/png', 'image/jpeg', 'image/gif']
    };

    render(){
        const multipleFile = this.props.multiple ? 'multiple' : '';

        return(
            <div>
                <input type="file"
                    multiple={multipleFile}
                    onChange={(event) => this.onLoad(event) }
                />
                <div
                    className={ this.props.fileAreaClassName }
                    onDrop={(event) => this.onLoad(event)}
                    onDragOver={(event) => this.onDragOver(event)}
                ></div>
            </div>
        );
    }

    onLoad(event){
        event.preventDefault();
        event.stopPropagation();
        this.uploadFiles(event.target.files || event.dataTransfer.files);
    }

    onDragOver(event){
        event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.effectAllowed = 'copy';
    }

    onDownloaded(file){
        this.loadedFiles.push(file);
        if(this.files.length = this.loadedFiles.length){
            this.props.onChange(this.loadedFiles);
        }
    }

    uploadFiles(newFiles){
        const vm = this;
        this.files = this.files.concat(Array.prototype.slice.call(newFiles));
        this.files.forEach((file) => {
            if(file && vm.props.validMimeTypes.indexOf(file.type) > -1){
                vm.loadFile(file);
            }
        });
    }

    loadFile(file){
        const vm = this;
        const reader = new FileReader();
        reader.onload = (function(theFile){
            return (event) => {
                const newFile = {
                    name: theFile.name,
                    dataUrl: event.target.result
                };

                vm.onDownloaded({ file: newFile });
            };
        })(file);
        reader.readAsDataURL(file);
    }
}

export default FileRead;