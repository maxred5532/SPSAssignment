import React, {useState} from 'react';
import {Form, Input} from 'antd';
import {CARD_SETTINGS} from '../CardsHelper';

const CardSettingText = ({ card, onChange }) => {

    const [form] = Form.useForm()
    const [titleText, setTitleText] = useState(card?.title || '')
    const [bodyText, setBodyText] = useState(card?.body || '')

    const handleTextChange = (type, text) => {
        if (type === CARD_SETTINGS.TITLE) {
            setTitleText(text)
            onChange(card.id, {title: text, body: bodyText})
        } else if (type === CARD_SETTINGS.BODY) {
            setBodyText(text)
            onChange(card.id, {title: titleText, body: text})
        }
    }

    return (
        <Form
            form={form}
            layout='vertical'
        >

            <Form.Item label='Title Text'>
                <Input placeholder='Enter custom title'
                       value={titleText}
                       maxLength={70}
                       onChange={(e) =>
                           handleTextChange(CARD_SETTINGS.TITLE, e.target.value)}
                />
            </Form.Item>
            <Form.Item label='Body Text'>
                <Input.TextArea placeholder='Enter custom text'
                                rows={4}
                                value={bodyText}
                                onChange={(e) =>
                                    handleTextChange(CARD_SETTINGS.BODY, e.target.value)}
                />
            </Form.Item>

        </Form>
    )
}

export default CardSettingText
