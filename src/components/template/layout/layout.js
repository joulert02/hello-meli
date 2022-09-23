import LayoutStyles from './layout.module.scss'

export const Layout = (props) => {
  return (
    <div className={LayoutStyles.layout}>
      <div className={LayoutStyles.header}>Header</div>
      <main> {props.children}</main>
      <div className={LayoutStyles.footer}>Footer</div>
    </div>
  )
}
