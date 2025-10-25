import styles from './Link.module.css'

type Props = React.PropsWithChildren<{ href: string }>

export function Link({ href, children }: Props) {
  return (
    <a href={href} className={styles.link}>
      {children}
    </a>
  )
}
