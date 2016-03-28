/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";

interface IPageButtonProps {
    onClick(pageNumber: number): void,
    mode: string,
    symbol: string,
    pageNumber: number
}

class PageButton extends React.Component<IPageButtonProps, {}> {
    private handleClick(): void {
        this.props.onClick(this.props.pageNumber);
    }

    render(): React.ReactElement<{}> {
        return (
            <li className={this.props.mode}><a href="#" onClick={this.handleClick}>{this.props.symbol}</a></li>
        )
    }
}

interface IPaginationProps {
    updatePage(pageNumber: number): void,
    itemAmount: number,
    itemsPerPage: number,
    prevSymbol: string,
    firstSymbol: string,
    nextSymbol: string,
    lastSymbol: string
}

interface IPaginationState {
    currentPage: number
}

export default class Pagination extends React.Component<IPaginationProps, IPaginationState> {
    private pageButtonClickHandler(pageNumber: number): void {
        var totalPageAmount = Math.ceil(this.props.itemAmount / this.props.itemsPerPage);

        if (pageNumber == -1 && this.state.currentPage != 0) {
            this.setState({ currentPage: this.state.currentPage - 1 });
            this.props.updatePage(this.state.currentPage - 1);
        }

        if (pageNumber == -2 && this.state.currentPage != totalPageAmount - 1) {
            this.setState({ currentPage: this.state.currentPage + 1 });
            this.props.updatePage(this.state.currentPage + 1);
        }

        if (pageNumber >= 0 && pageNumber != this.state.currentPage) {
            this.setState({ currentPage: pageNumber });
            this.props.updatePage(pageNumber);
        }
    }
    render(): React.ReactElement<{}> {
        var totalPageAmount = Math.ceil(this.props.itemAmount / this.props.itemsPerPage);
        var pageButtons = [];

        if (totalPageAmount > 0) {
            if (totalPageAmount != 1 && this.state.currentPage != 0) {
                pageButtons.push(<PageButton key={0} mode='' onClick={this.pageButtonClickHandler} symbol={this.props.firstSymbol} pageNumber={0} />);
                pageButtons.push(<PageButton key={1} mode='' onClick={this.pageButtonClickHandler} symbol={this.props.prevSymbol} pageNumber={-1} />);
            }

            for (var i = 0; i < totalPageAmount; i++) {
                if (this.state.currentPage == i) {
                    pageButtons.push(<PageButton key={i + 2} mode='active' onClick={ function () { } } symbol={ String(i + 1) } pageNumber={i} />);
                } else {
                    pageButtons.push(<PageButton key={i + 2} mode='' onClick={this.pageButtonClickHandler} symbol={ String(i + 1) } pageNumber={i} />);
                }

            }

            if (totalPageAmount != 1 && this.state.currentPage != totalPageAmount - 1) {
                pageButtons.push(<PageButton key={i + 3} mode='' onClick={this.pageButtonClickHandler} symbol={this.props.nextSymbol} pageNumber={-2} />);
                pageButtons.push(<PageButton key={i + 4} mode='' onClick={this.pageButtonClickHandler} symbol={this.props.lastSymbol} pageNumber={totalPageAmount - 1} />);
            }
        }

        return (
            <div className="pull-right">
                <ul className="pagination pull-right" style={{ marginTop: 0 + 'px', marginBottom: 0 + 'px' }}>
                    {pageButtons}
                </ul>
            </div>
        )
    }
}