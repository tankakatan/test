"use strict";

import * as React from "react"
import * as ReactDOM from "react-dom"

import './index.css'

const Theme = React.createContext ('light')

const ContentLight: React.FC = ({ children }) => <Theme.Provider value='light'>{ children }</Theme.Provider>

const Page: React.FC = ({ children }) => <div id='page'>{ children }</div>
const Main: React.FC = ({ children }) => <main>{ children }</main>
const Feed: React.FC = ({ children }) => <div id='feed'>{ children }</div>
const Sidebar: React.FC = ({ children }) => <div id='sidebar'>{ children }</div>
const Content: React.FC = ({ children }) => <div id='content'>{ children }</div>
const Footer: React.FC = ({ children }) => <footer>{ children }</footer>
const Header: React.FC = ({ children }) => <header>{ children }</header>
const FeedItem: React.FC = ({ children }) => <section>{ children }</section>
const FooterContent: React.FC = ({ children }) => <div className='footer-content'>{ children }</div>

interface ButtonProps { title: string, onClick: (event: React.MouseEvent) => void }
const Button: React.FC<ButtonProps> = ({ title, onClick }) => <a className='button' onClick={ onClick }>{ title }</a>

const App = () => <ContentLight>
    <Page>
        <Header/>
        <Main>
            <Feed>
                { Array.from ({ length: 2 }).map ((_: unknown, i: number) => <FeedItem key={ i }/>) }
            </Feed>
            <Sidebar/>
            <Content/>
        </Main>
        <Footer>
            <FooterContent>
                <Button title='Click here!' onClick={ () => console.log ('Thanks!') }/>
            </FooterContent>
        </Footer>
    </Page>
</ContentLight>

ReactDOM.render (<App />, document.getElementById ('root'))
