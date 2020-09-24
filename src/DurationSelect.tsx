import React from 'react'
import NumberSelect from './NumberSelect'

export enum DurationFragment {
    Hours = 'hours',
    Minutes = 'minutes',
    Seconds = 'seconds'
}

interface DurationSelectProps {
    value: number
    onChange: (value: number) => void
}

interface DurationSelectState {}

interface Duration {
    [key: string]: number
}

export default class DurationSelect extends React.Component<DurationSelectProps, DurationSelectState> {
    handleChange(prop: string, value: number) {
        const duration = this.toDuration(this.props.value)
        duration[prop] = value
        this.props.onChange(this.toSeconds(duration))
    }

    toSeconds(duration: Duration): number {
        const hours = duration[DurationFragment.Hours] * 3600
        const minutes = duration[DurationFragment.Minutes] * 60

        return hours + minutes + duration[DurationFragment.Seconds]
    }

    toDuration(seconds: number): Duration {
        const date = new Date(seconds * 1000)

        return {
            [DurationFragment.Hours]: date.getUTCHours(),
            [DurationFragment.Minutes]: date.getUTCMinutes(),
            [DurationFragment.Seconds]: date.getSeconds() 
        }
    }

    render () {
        const duration = this.toDuration(this.props.value)

        return (
            <div className="duration-select">
                <NumberSelect
                    name={DurationFragment.Hours} 
                    value={duration[DurationFragment.Hours]} 
                    max="23" 
                    onChange={this.handleChange.bind(this, DurationFragment.Hours)} 
                />
                <span>:</span>
                <NumberSelect 
                    name={DurationFragment.Minutes} 
                    value={duration[DurationFragment.Minutes]} 
                    max="59" 
                    pad="2" 
                    onChange={this.handleChange.bind(this, DurationFragment.Minutes)} 
                />
                <span>:</span>
                <NumberSelect 
                    name={DurationFragment.Seconds} 
                    value={duration[DurationFragment.Seconds]} 
                    max="59" 
                    pad="2" 
                    onChange={this.handleChange.bind(this, DurationFragment.Seconds)} 
                />
                <span>hh:mm:ss</span>
            </div>
        )
    }
}