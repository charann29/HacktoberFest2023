package tools

import (
	"fmt"
	"strings"
)

func Management(str string) []string {
	r := []rune(str)
	if len(r) != len(str) {
		fmt.Println("\x1b[31;1m Not authorized \x1b[0m")
		return nil
	}
	tab := strings.Split(str, "\\n")
	for _, m := range tab {
		if m != "" {
			return tab
		}
	}
	return tab[1:]

}
