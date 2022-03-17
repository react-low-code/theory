import React from 'react'

interface CustomInputProps {
    inputRef: React.LegacyRef<HTMLInputElement>
    title: string
}

class CustomInputInner extends React.Component<CustomInputProps>{
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <input ref={this.props.inputRef}/>
            </div>
        )
    }
}

const CustomInput =  React.forwardRef<HTMLInputElement, Omit<CustomInputProps, 'inputRef'>>((props, ref) => {
    return <CustomInputInner {...props} inputRef={ref} />;
});

export default CustomInput

