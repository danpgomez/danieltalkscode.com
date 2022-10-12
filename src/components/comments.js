import React, { Component } from "react";

export default class Comments extends Component {

    constructor(props) {
        super(props);
        this.commentBox = React.createRef();
    }

    componentDidMount () {
        let scriptEl = document.createElement("script");
        scriptEl.setAttribute("src", "https://utteranc.es/client.js");
        scriptEl.setAttribute("crossorigin", "anonymous");
        scriptEl.setAttribute("async", true);
        scriptEl.setAttribute("repo", "danpgomez/danieltalkscode.com-comments");
        scriptEl.setAttribute("issue-term", "pathname");
        scriptEl.setAttribute("theme", "github-light");
        this.commentBox.current.appendChild(scriptEl);
    }

    render() {
        return (
            <div id="comments" className="comment-box-wrapper">
                <h1 className="mb-0">Comments {''}</h1>
                <hr className="my-0"/>
                <div ref={this.commentBox} className="comment-box"/>
            </div>
        );
    }
}

