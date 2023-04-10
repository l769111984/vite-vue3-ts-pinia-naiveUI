import { defineConfig } from 'unocss/vite'
import {
  presetAttributify,
  presetUno,
  transformerVariantGroup,
  transformerDirectives,
  presetIcons
} from 'unocss'

interface VariantsType {
  matcher: string
  selector: (params: string) => string
}

export default defineConfig({
  theme: {
    screens: {}
  },
  rules: [
    [
      /clip-path-\[(.+)\]/,
      (match) => ({ 'clip-path': match[1].replace(/_/g, ' ') })
    ],
    [
      /filter-\[(.+)\]/,
      (match) => ({ filter: match[1].replace(/_/g, ' ') })
    ]
  ],
  shortcuts: [
    [
      // flex 居中
      /^flex-center(.)*/,
      ([, match]) => {
        if (match?.includes('x')) return 'flex justify-center'
        if (match?.includes('y')) return 'flex items-center'

        return 'flex justify-center items-center'
      }
    ]
  ],
  presets: [
    presetAttributify({
      prefix: 'un-',
      prefixedOnly: true
    }),
    presetUno(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block'
      }
    })
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  variants: [
    (matcher): VariantsType | string => {
      const customerRule: [string, string][] = [
        ['scrollbar:', '::-webkit-scrollbar'],
        ['c-radio:', ' .ant-radio-wrapper'],
        ['c-table-select:', ' td'],
        ['c-table-row:', ' .ant-table-row td:last-child'],
        ['c-table-scroll:', ' .ant-table-body::-webkit-scrollbar'],
        [
          'c-table-scroll-button:',
          ' .ant-table-body::-webkit-scrollbar-button'
        ],
        ['c-table-scroll-thumb:', ' .ant-table-body::-webkit-scrollbar-thumb']
      ]

      const matc = customerRule.find((item) => {
        return matcher.startsWith(item[0])
      })
      if (!matc) return matcher
      return {
        matcher: matcher.slice(matc[0].length),
        selector: (s: string) => {
          return `${s}${matc[1]}`
        }
      }
    }
  ]
})
