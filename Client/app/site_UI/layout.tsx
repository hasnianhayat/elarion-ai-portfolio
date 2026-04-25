
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"


function Site_layout({
      children,
    }: Readonly<{
      children: React.ReactNode
}>) {
  return (
    <div>
        <SiteHeader/>
      {children}
      <SiteFooter/>
    </div>
  )
}

export default Site_layout
