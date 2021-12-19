export interface RuleProp {
  type: 'required' | 'range' | 'custom'
  message: string
  validator?: () => boolean
}
