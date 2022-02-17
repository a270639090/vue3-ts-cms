import hyRequset from "@/service"

export function getPageListData(url: string, queryInfo: any) {
  return hyRequset.post({
    url: url,
    data: queryInfo
  })
}
