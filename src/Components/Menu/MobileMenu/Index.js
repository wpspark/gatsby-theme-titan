import React, { Component } from 'react';
import CategoryMenu from '../SidebarMenu/Index';
import {MobileMenuWrapper} from './Style';

export class MobileMenu extends Component {
    toggleOffCanvasMenu = () => {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("mySidenav").style.marginRight = "250px";
    }
    render() {
        return (
            <MobileMenuWrapper className="mobile-menu">
                <button className="button has-text-grey" onClick={this.toggleOffCanvasMenu}>Menu</button>
                <div className="navbar-start">
                    <CategoryMenu slug={this.props.slug} />
                </div>
            </MobileMenuWrapper>
        )
    }
}

export default MobileMenu
