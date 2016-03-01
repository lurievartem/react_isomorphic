import React, { Component, PropTypes, Children } from 'react';

class FormField extends Component{
    static propTypes = {
        children: PropTypes.node.isRequired,
        className: PropTypes.string,
        errorClassName: PropTypes.string
    };

    static defaultProps = {
        className: 'formField',
        errorClassName: 'errorField'
    };

    render(){
        return(
            /***Disclaimer: not use in production, better for production create component and sent touched, error how props
                <div>
                    {this.props.children}
                    {this.props.touched && this.props.error && <div className={this.props.errorClassName}>{this.props.error}</div>}
                </div>
            */

            <div className={this.props.className}>
                {
                    Children.map(this.props.children, (child) => {
                        if(child.props.name){
                            return (
                                <div>
                                    {child}
                                    {child.props.touched && child.props.error && <div className={this.props.errorClassName}>{child.props.error}</div>}
                                </div>
                            )
                        } else{
                            return child;
                        }
                    }, this)
                }
            </div>
        );
    }

}

export default FormField;