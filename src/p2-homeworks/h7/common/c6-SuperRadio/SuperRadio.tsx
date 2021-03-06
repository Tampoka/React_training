import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => ( // map options with key
        <label key={name + '-' + i}>
            <input
                type={'radio'}
                name={name}
                value={o}
                onChange={onChangeCallback}
                checked={o === value}
                className={o === value ? s.radioSelected : s.radio}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : []

    return (
        <div className={s.radioContainer}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
