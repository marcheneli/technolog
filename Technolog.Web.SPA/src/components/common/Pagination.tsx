import * as React from "react";

interface IPageButtonProps {
    onClick(pageNumber: number): void,
    mode: string,
    symbol: string,
    pageNumber: number
}

class PageButton extends React.Component<IPageButtonProps, {}> {
    private handleClick = (): void => {
        this.props.onClick(this.props.pageNumber);
    }

    render(): React.ReactElement<{}> {
        return (
            <li className={this.props.mode}><a href="#" onClick={this.handleClick}>{this.props.symbol}</a></li>
        )
    }
}

interface IPaginationProps {
    onPageBtnClick(pageNumber: number): void,
    itemAmount: number,
    itemsPerPage: number,
    currentPage: number,
    prevSymbol: string,
    firstSymbol: string,
    nextSymbol: string,
    lastSymbol: string
}

interface IPaginationState {
}

export default class Pagination extends React.Component<IPaginationProps, IPaginationState> {

    constructor(props: IPaginationProps, context: any) {
        super(props, context);

        this.props = props;
        this.context = context;
        this.state = {
        };
    }

    private pageButtonClickHandler = (pageNumber: number): void => {
        var totalPageAmount = Math.ceil(this.props.itemAmount / this.props.itemsPerPage);

        if (pageNumber == -1 && this.props.currentPage != 0) {
            this.props.onPageBtnClick(this.props.currentPage - 1);
        }

        if (pageNumber == -2 && this.props.currentPage != totalPageAmount - 1) {
            this.props.onPageBtnClick(this.props.currentPage + 1);
        }

        if (pageNumber >= 0 && pageNumber != this.props.currentPage) {
            this.props.onPageBtnClick(pageNumber);
        }
    }

    render(): React.ReactElement<{}> {
        var totalPageAmount = Math.ceil(this.props.itemAmount / this.props.itemsPerPage);
        var pageButtons = [];

        if (totalPageAmount > 0) {
            if (totalPageAmount != 1 && this.props.currentPage != 0) {
                pageButtons.push(<PageButton key={0} mode='' onClick={this.pageButtonClickHandler} symbol={this.props.firstSymbol} pageNumber={0} />);
                pageButtons.push(<PageButton key={1} mode='' onClick={this.pageButtonClickHandler} symbol={this.props.prevSymbol} pageNumber={-1} />);
            }

            for (var i = 0; i < totalPageAmount; i++) {
                if (this.props.currentPage == i) {
                    pageButtons.push(<PageButton key={i + 2} mode='active' onClick={ function () { } } symbol={ String(i + 1) } pageNumber={i} />);
                } else {
                    pageButtons.push(<PageButton key={i + 2} mode='' onClick={this.pageButtonClickHandler} symbol={ String(i + 1) } pageNumber={i} />);
                }

            }

            if (totalPageAmount != 1 && this.props.currentPage != totalPageAmount - 1) {
                pageButtons.push(<PageButton key={i + 3} mode='' onClick={this.pageButtonClickHandler} symbol={this.props.nextSymbol} pageNumber={-2} />);
                pageButtons.push(<PageButton key={i + 4} mode='' onClick={this.pageButtonClickHandler} symbol={this.props.lastSymbol} pageNumber={totalPageAmount - 1} />);
            }
        }

        return (
            <div style={{ float: 'right' }}>
                <ul className="pagination" style={{ marginTop: 0 + 'px', marginBottom: 0 + 'px', float: 'right' }}>
                    {pageButtons}
                </ul>
            </div>
        )
    }
}