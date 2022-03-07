import React from 'react';
import {Col, Divider, Form, Row, Typography} from 'antd';
import NumericInput from '../../../components/Inputs/NumericInput/NumericInput';
import ColorPicker from '../../../components/Inputs/ColorPicker/ColorPicker';

const CardStyleObjects = [
    {
        title: 'Title',
        items: [
            { title: 'Size', key: 'titleSize' },
            { title: 'Color', key: 'titleColor'}
        ]
    },
    {
        title: 'Body',
        items: [
            { title: 'Size', key: 'bodySize' },
            { title: 'Color', key: 'bodyColor'}
        ]
    },
    {
        title: 'Panel',
        items: [
            { title: 'Corner Radius', key: 'panelRadius' },
            { title: 'Color', key: 'panelColor'}
        ]
    }
]
const CardSettingStyle = ({ card, onChange }) => {

    const [form] = Form.useForm()

    const handleSubmitChange = (type, text) => {
        const tempData = {
            [type]: text
        }
        onChange(card.id, tempData)
    }

    return (
        <Form
            form={form}
            layout='vertical'
        >
            {
                CardStyleObjects.map((panel, idx) => {
                    const textChild = panel.items[0]        // text
                    const colorChild = panel.items[1]       // color

                    return (
                        <div key={idx}>
                            <Typography.Title level={3} className='settings'>{panel.title}</Typography.Title>
                            <Row gutter={16}>
                                {/* Text Component */}
                                <Col span={12}>
                                    <Form.Item label={textChild.title}>
                                        <NumericInput
                                            name='Title'
                                            defaultValue={card?.[textChild.key]}
                                            onChange={(text) => handleSubmitChange(textChild.key, text)}
                                            formatter={value => `${value}px`}
                                            parser={value => value.replace('px', '')}
                                            min={1}
                                            max={160}
                                        />
                                    </Form.Item>
                                </Col>
                                {/* Color Component */}
                                <Col span={12}>
                                    <Form.Item label={colorChild.title}>
                                        <ColorPicker
                                            color={card?.[colorChild.key]}
                                            onChange={(color) => handleSubmitChange(colorChild.key, color)}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            { idx < CardStyleObjects.length - 1 && <Divider /> }
                        </div>
                    )
                })
            }
        </Form>
    )
}

export default CardSettingStyle
