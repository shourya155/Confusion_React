import React,{Component} from 'react';
import {Media, Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle} from 'reactstrap';

class DishdetailComponent extends Component{
    constructor(props){
        super(props);
    }

    renderrDish(dish){
        if(dish!=null){
			return(
                <div>
					<Card>
						<CardImg width="100%" src={dish.image} alt={dish.name} />
						<CardBody>
							<CardTitle> {dish.name} </CardTitle>
							<CardText> {dish.description} </CardText>
						</CardBody>
					</Card>
                </div>
			);
		}else{
			return (
				<div></div>
			);
		}
	}

    renderrComments(dish){
        if(dish!=null){
                let renderrringcomments;
                if(dish.comments != null){
                    renderrringcomments = dish.comments.map((cmkey)=>{
                        return(
                            
                            <li key={cmkey.id}>
                            <p>{cmkey.comment}</p>
                            <p>-- {cmkey.author} , {cmkey.date.split("T")[0]}</p>
                            </li>
                            
                        );
                    });
                }
    
             return (
            <div>
                <h4>Comments</h4>
             <ul className="list-unstyled">
                 {renderrringcomments}
             </ul>
             </div>
             );
            }
    else{
        return (
            <div></div>
        );
    }
    }

    render(){
        return(
            
                <div className="row">
                <div className="col-12 col-md-5 m-1">
                        {this.renderrDish(this.props.clcikeddish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                        {this.renderrComments(this.props.clcikeddish)}
                </div>
                </div>
            
        );
    }
}

export default DishdetailComponent;