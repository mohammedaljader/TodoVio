from uuid import UUID

from schemas.card import Card
from config.db import conn
from models.cards import cards


async def getAllCards():
    return conn.execute(cards.select()).fetchall()


async def getCardById(card_id: UUID):
    return conn.execute(cards.select().where(cards.c.card_id == card_id)).fetchall()


async def addCard(card: Card):
    conn.execute(cards.insert().values(
        card_id=card.card_id,
        card_title=card.card_title
    ))
    return True


async def updateCard(card_id: UUID, card: Card):
    updatedCard = await getCardById(card_id)
    if updatedCard:
        conn.execute(cards.update().values(
            card_title=card.card_title
        ).where(cards.c.card_id == card_id))
        return True
    return False


async def deleteCard(card_id: UUID):
    card = await getCardById(card_id)
    if card:
        conn.execute(cards.delete().where(cards.c.card_id == card_id))
        return True
    return False
