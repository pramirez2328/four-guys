import { Button, Col, Card } from 'reactstrap';
const Ingredients = ({ currentItem, handleAddAndRemove, addIng, action }) => {
  if (currentItem) {
    console.log(currentItem);
    const ingredients = currentItem[0].options.map((item, index) => ({ ...item, id: ++index }));

    return ingredients.map((item) => {
      return (
        <Col key={item.id} className='p-4 col-7 col-sm-6 col-md-4 p-md-3 p-lg-5 my-4 mx-auto'>
          <Card className='d-flex justify-content-center align-items-center flex-column p-3' id='card-ingredients'>
            <img className='w-100' src={item.imgIcon} alt={item.item} />
            <h6 className='text-center mt-2'>{item.item}</h6>
            <Button
              className={`btn ${addIng === item.item ? 'btn-primary' : 'btn-danger'} w-100`}
              onClick={() => handleAddAndRemove(action, currentItem[0].id, item.item)}
            >
              {addIng === item.item ? 'REMOVE' : 'ADD'}
            </Button>
          </Card>
        </Col>
      );
    });
  } else {
    return null;
  }
};

export default Ingredients;