import React from 'react';
import {Button, Card, Divider, Popconfirm, Space, Tooltip, Typography} from 'antd';
import {CopyTwoTone, DeleteTwoTone, EditTwoTone} from '@ant-design/icons';
import styled from 'styled-components';
import {DEFAULT_CARD_BODY, DEFAULT_CARD_TITLE, DEFAULT_NEW_CARD} from '../../../views/CardsView/CardsHelper';
import clsx from 'clsx';
import styles from './DisplayCard.module.less';
import FadeComponent from '../../Layout/FadeComponent';

const DynamicCard = styled(Card)`
    border-radius: ${props => props.styles.panelRadius || DEFAULT_NEW_CARD.panelRadius}px;
    background: ${props => props.styles.panelColor || DEFAULT_NEW_CARD.panelColor};
    .ant-card-head-title .ant-typography {
      font-size: ${props => props.styles.titleSize || DEFAULT_NEW_CARD.titleSize}px;
      color: ${props => props.styles.titleColor || DEFAULT_NEW_CARD.titleColor};
    }
    .ant-card-body .ant-typography {
      font-size: ${props => props.styles.bodySize || DEFAULT_NEW_CARD.bodySize}px;
      color: ${props => props.styles.bodyColor || DEFAULT_NEW_CARD.bodyColor};
    }
`

const DisplayCard = ({ card, isSelected, isDeletable,
                         onCardSelect, onCardDuplicate, onCardDelete }) => {

    const renderExtraButtons = () =>
        <Space size={2}>
            <Tooltip title='Edit'>
                <Button type='link'
                        icon={<EditTwoTone />}
                        size='large'
                        onClick={() => onCardSelect(card)}
                />
            </Tooltip>
            <Tooltip title='Duplicate'>
                <Button type='link'
                        icon={<CopyTwoTone />}
                        size='large'
                        onClick={() => onCardDuplicate(card.id)}
                />
            </Tooltip>
            <Popconfirm
                disabled={!isDeletable}
                title='Really delete this card?'
                onConfirm={() => onCardDelete(card.id)}
                okText='Yes'
                cancelText='No'
                placement='bottom'
            >
                <Tooltip title='Delete'>
                    <Button type='link'
                            disabled={!isDeletable}
                            icon={<DeleteTwoTone twoToneColor={isDeletable ? '#1890FF' : '#E0E0E0'} />}
                            size='large'
                    />
                </Tooltip>
            </Popconfirm>
        </Space>

    return (
        <DynamicCard styles={card}
                     title={
                         <FadeComponent changeKey={card?.title || DEFAULT_CARD_TITLE}>
                             <Typography className={styles.cardTitle}>
                                 {card?.title || DEFAULT_CARD_TITLE}
                             </Typography>
                         </FadeComponent>
                     }
                     bordered={false}
                     className={clsx(styles.card, {
                         [styles.selectedCard]: isSelected
                     })}
                     extra={renderExtraButtons()}
        >
            <Divider className={styles.divider} />
            <FadeComponent changeKey={card?.body || DEFAULT_CARD_BODY}>
                <Typography.Paragraph className={styles.cardBody}>
                    {card?.body || DEFAULT_CARD_BODY}
                </Typography.Paragraph>
            </FadeComponent>
        </DynamicCard>
    )
}

export default DisplayCard
