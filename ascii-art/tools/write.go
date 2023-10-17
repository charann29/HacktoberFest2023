package tools

import "fmt"

func WriteFile(tab []string, asciiTab []string) {
	for _, str := range tab {
		if str == "" {
			fmt.Println()
		} else {
			for i := 1; i < 9; i++ {
				for _, v := range str {
					fmt.Print(asciiTab[int(v-32)*9+i])
				}
				fmt.Println()
			}
		}
	}
}
