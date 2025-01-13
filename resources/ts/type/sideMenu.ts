import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

export type SideLinkType = {
    id: number
    label: string
    icon: IconDefinition
}[]

export type SideMenuType = {
    open: {
        sideOpen: boolean
        deleteOpen: boolean
    }
    menuOpen: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void
    toggleDeleteOpen: (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void
}
