import React, {useEffect, useMemo} from 'react';
import {Layout} from 'antd';
import CardsDrawer from '../../components/Card/CardsDrawer/CardsDrawer';
import {debounce} from 'lodash';
import {deepClone} from 'craco-less/lib/utils';
import {useDispatch, useSelector} from 'react-redux';
import {setAllCards, setOneCard, setSelectedCard} from '../../actions';
import {DEFAULT_NEW_CARD, generateBasicId} from './CardsHelper';
import TabsContainer from '../../components/Tabs/TabsContainer';
import {FormatPainterOutlined, SettingOutlined} from '@ant-design/icons';
import CardSettingText from './CardsSettings/CardSettingText';
import CardSettingStyle from './CardsSettings/CardsSettingStyle';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import DisplayCard from '../../components/Card/DisplayCard/DisplayCard';

const CardsView = () => {

    const dispatch = useDispatch()
    const allCards = useSelector(state => state.cards.allCards)
    const selectedCard = useSelector(state => state.cards.selectedCard)

    useEffect(() => {
        // init default card when there is no card
        if (allCards.length < 1) {
            setAllCards([DEFAULT_NEW_CARD])(dispatch)
        }
    }, [dispatch, allCards])

    // select to show/hide drawer
    const handleCardDeselect = () => setSelectedCard(null)(dispatch)
    const handleCardSelect = (card) => setSelectedCard(card)(dispatch)

    // find the item with the given id then copy it to the following index
    const handleCardDuplicate = (cardId) => {
        let tempAllCards = allCards
        const cardIndex = tempAllCards.findIndex(card => card.id === cardId)
        if (cardIndex > -1) {
            const originalCard = tempAllCards[cardIndex]
            // duplicate the card and add it after the index
            tempAllCards.splice(cardIndex + 1, 0,
                {...originalCard, id: generateBasicId()})
            setAllCards(deepClone(tempAllCards))(dispatch)
        }
    }

    // actually remove the item corresponding to the given id
    const handleCardDelete = (cardId) => {
        let tempAllCards = allCards
        const cardIndex = tempAllCards.findIndex(card => card.id === cardId)
        if (cardIndex > -1) {
            tempAllCards.splice(cardIndex, 1)
            setAllCards(deepClone(tempAllCards))(dispatch)
        }
    }

    // debounce the changes to prevent too many updates
    // const handleCardChange = useCallback((cardId, cardData) =>
    //     setOneCard(cardId, cardData)(dispatch), [dispatch])
    const cardChangeHandler = useMemo(
        () => debounce((cardId, cardData) =>
            setOneCard(cardId, cardData)(dispatch), 500),
        [dispatch]
    )

    return (
        <Layout>
            {/* Display Cards Drawer when a card is selected */}
            <CardsDrawer
                visible={selectedCard}
                onClose={handleCardDeselect}>
                <TabsContainer tabsData={[
                    {
                        title: <SettingOutlined className='tabIcon' />,
                        content: <CardSettingText card={selectedCard} onChange={cardChangeHandler} />
                    },
                    {
                        title: <FormatPainterOutlined className='tabIcon' />,
                        content: <CardSettingStyle card={selectedCard} onChange={cardChangeHandler} />
                    },
                ]}/>
            </CardsDrawer>

            {/* Display Cards */}
            <Layout>
                <TransitionGroup>
                    {
                        allCards.map(card =>
                            <CSSTransition key={card.id}
                                           timeout={500}
                                           classNames='animated-list'
                                           in={true}
                                           appear={true}
                            >
                                <DisplayCard
                                    card={card}
                                    isDeletable={allCards.length > 1}
                                    isSelected={selectedCard?.id === card.id}
                                    onCardSelect={handleCardSelect}
                                    onCardDuplicate={handleCardDuplicate}
                                    onCardDelete={handleCardDelete}
                                />
                            </CSSTransition>
                        )
                    }
                </TransitionGroup>
            </Layout>
        </Layout>
    )
}

export default CardsView
