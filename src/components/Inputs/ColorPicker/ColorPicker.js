import React, {useEffect, useState} from 'react';
import styles from './ColorPicker.module.less';
import {BlockPicker} from 'react-color';
import {Popover} from 'antd';

const ColorPicker = ({ color, onChange }) => {

    const [showPicker, setShowPicker] = useState(false)
    const [selectedColor, setSelectedColor] = useState('#000000')

    useEffect(() => {
        if (color) {
            setSelectedColor(color)
        }
    }, [color])

    const handlePickerToggle = () => setShowPicker(!showPicker)
    const handleChangeColor = (color) => {
        setSelectedColor(color.hex)
        onChange(color.hex)
    }

    return (
        <Popover
            trigger='click'
            placement='bottom'
            visible={showPicker}
            onVisibleChange={handlePickerToggle}
            overlayClassName={styles.colorPicker}
            content={
                <BlockPicker
                    color={selectedColor}
                    onChangeComplete={handleChangeColor}
                />
            }
        >
            <div className={styles.paletteBlock}
                 style={{ backgroundColor: selectedColor }}
                 onClick={handlePickerToggle}
            />
        </Popover>
    )
}

export default ColorPicker
