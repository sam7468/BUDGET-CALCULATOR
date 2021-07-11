document.getElementsByClassName("enter_button")[0].onclick = function(){
    //set local storege
    let income = document.getElementById("main_budget").value
    let date = document.getElementById("end_date").value
    
    //disply property
    document.getElementsByClassName("home_window")[0].style.display = "none"
    document.getElementsByClassName("enter_button")[0].style.display = "none"
    document.getElementsByClassName("budget_window")[0].style.display = "block"

    //fixed_block for showing budget
    const budget = income
    document.getElementById("fixed_budget").innerText =  Number(budget) - Number(budget)*20/100 

    let balance = income
    let dynamic_budget = document.getElementById("budget_h1")
    dynamic_budget.innerText = Number(balance) - Number(balance)*20/100
    let income_int = income
    document.getElementById("savings_h1").innerText = 0

    let cur_exp = 0
    let no = 1
    document.getElementById("add_exp").addEventListener('click',function(){
        temp = document.getElementById("expense").value
        cur_exp = cur_exp + Number(temp) 
        document.getElementById("current_exp").innerText = cur_exp
        dynamic_budget.innerText =  ((Number(balance) - Number(balance)*20/100) - cur_exp).toFixed(0)
        document.getElementById("savings_h1").innerText = Number(income_int) - cur_exp
    })
    
    
    document.getElementById("add_exp").addEventListener('click',function(){
        localStorage.setItem("no" , no)
        no +=1
        localStorage.setItem("category" , document.getElementById("inlineFormCustomSelect").value)
        localStorage.setItem("description" , document.getElementById("budget_description").value)
        localStorage.setItem("exp_date" , document.getElementById("exp_date").value)
        localStorage.setItem("amount" , document.getElementById("expense").value)
    })

    document.getElementById("add_exp").addEventListener('click',function(){

                let row = document.createElement("tr")
                row.setAttribute("id" , "row1")
                let list = ["no","category","description","exp_date","amount"]
                for(i=0; i<6; i++){
                        let temp_td  = document.createElement("td")
                        temp_td.innerText = localStorage.getItem(list[i])
                        row.append(temp_td)
                    }
                
                document.getElementById("tbody").append(row)
    })

    document.getElementById("clear_form").addEventListener('click',function(){
        document.getElementById("inlineFormCustomSelect").value = ""
        document.getElementById("budget_description").value = ""
        document.getElementById("exp_date").value = ""
        document.getElementById("expense").value = ""
    })

    document.getElementById("edit").onclick = function(){
        document.getElementById("edit").style.display = "none"
        document.getElementById("edit_input").style.display = "block"
    }

    document.getElementById("change_btn").onclick = function(){
        let temp_budget = document.getElementById("new_budget").value 
        document.getElementById("fixed_budget").innerText = temp_budget
        dynamic_budget.innerText =temp_budget
        document.getElementById("edit_input").style.display = "none"
        document.getElementById("edit").style.display = "block"
        income_int = temp_budget 
        balance = temp_budget
    }

    document.getElementById("refresh").onclick = function(){
        window.history.go(0)
    } 
}   
/*

function Queue(){
    this.arr=[]
    this.front=0
    this.rear=0
    this.add = add
    this.remove = remove
    this.print = print
}

function add(data){
    this.arr[this.rear] = data
    this.rear++
}

function remove(){
    if(this.rear==this.front){
        return undefined
    }
    let temp = this.arr[this.front]
    this.front++
    return temp
    
}

function print(){
    console.log(this.arr.slice(this.front,this.rear+1))
}


obj = new Queue()
obj.add("x")
obj.add("y")
obj.add("z")
obj.add("c")

obj.print()
console.log(obj.remove())
console.log(obj.remove())
console.log(obj.remove())
console.log(obj.remove())
console.log(obj.remove())
obj.print()




*/




















