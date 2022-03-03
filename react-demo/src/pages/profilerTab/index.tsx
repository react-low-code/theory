import React from 'react'
 
interface ProfilerTabState {
    count: number;
    useless: number;
}
 
class ProfilerTab extends React.Component<{}, ProfilerTabState> {
    state: ProfilerTabState = {
        count: 0,
        useless: 0
    }

    render() { 
        return (
            <div>
                <button onClick={this.onSub}>减1</button>
                {this.state.count}
                <button onClick={this.onAdd}>加1</button>
            </div>
        )
    }

    onAdd = () => {
        this.onChangeCount(this.state.count + 1)
    }

    onSub = () => {
        this.onChangeCount(this.state.count - 1)
    }

    onChangeCount = (count: number) => {
        this.setState({
            count
        })
    }

    componentDidUpdate(prevProps: {}, prevState: ProfilerTabState) {
        if (prevState.count !== this.state.count) {
            this.setState({
                useless: Math.random()
            })
        }
    }
}

 
export default ProfilerTab;