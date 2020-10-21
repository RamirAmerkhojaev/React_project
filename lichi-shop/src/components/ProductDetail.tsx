import React, { ReactElement } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { products } from '../databases/database'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import "../styles/ProductDetails.css"
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperIcon,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestIcon,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    TumblrShareButton,
    TwitterIcon,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton
  } from "react-share";

interface Props {
    
}

export default function ProductDetail({}: Props): ReactElement {

    const match = useRouteMatch<{prodId: any}>()
    const product = match.params.prodId;

  
    

    return (
        <div id = "productDetails">
            {
                products.filter(prd => prd.prd_id == product).map(item => (
                <div className = "details" key = {item.prd_id}>
                    <Zoom zoomMargin={40}>
                    <img
                        src={item.prd_img}
                        className="image"
                        style={{ width: "25em"}}
                    />
                    </Zoom>

                    <div className="box">
                        <div className="row">
                            <h3>DESIGNED IN GERMANY</h3>
                            <h2>{item.prd_name}</h2>
                            <h3>${item.prd_price}.00</h3>   
                        </div>
                        
                        <Link to = "/card" className = "card">
                            Add to shopping bag
                        </Link>
                        <p>{item.prd_description}</p>
                        <div className = "share">
                            <ul>
                                <li><FacebookShareButton url= "facebook.com"><FacebookIcon size={40}round/></FacebookShareButton></li>
                                <li><InstapaperShareButton url= "facebook.com"><InstapaperIcon size={40}round/></InstapaperShareButton></li>
                                <li><TelegramShareButton url= "facebook.com"><TelegramIcon size={40}round/></TelegramShareButton></li>
                                <li><VKShareButton url= "facebook.com"><FacebookIcon size={40}round/></VKShareButton></li>
                                <li><EmailShareButton url= "facebook.com"><EmailIcon size={40}round/></EmailShareButton></li>
                                <li><TwitterShareButton url= "facebook.com"><TwitterIcon size={40}round/></TwitterShareButton></li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
