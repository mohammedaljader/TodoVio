from fastapi import APIRouter, HTTPException
from schemas.card import Card
from Service.cardService import getAllCards, getCardById, addCard, updateCard, deleteCard

card = APIRouter()


@card.get("/api/cards")
async def get_all_cards():
    response = await getAllCards()
    return response


@card.get("/api/card/{card_id}")
async def get_card_by_id(card_id: int):
    response = await getCardById(card_id)
    return response


@card.post("/api/card")
async def add_card(cardModel: Card):
    newCard = await addCard(cardModel)
    if newCard:
        return "Card added successfully!"
    raise HTTPException(400, "Something went wrong")


@card.put("/api/card/{card_id}")
async def update_card(card_id: int, cardModel: Card):
    updatedCard = await updateCard(card_id, cardModel)
    if updatedCard:
        return "Card updated successfully!"
    raise HTTPException(404, f"There is no card with the id {card_id}")


@card.delete("/api/card/{card_id}")
async def delete_todos(card_id: int):
    result = await deleteCard(card_id)
    if result:
        return "Card deleted successfully!"
    raise HTTPException(404, f"There is no card with the id {card_id}")
