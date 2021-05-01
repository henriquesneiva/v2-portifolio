
import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import  * as $ from "jquery";

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit {
    @ViewChild('selectElem') el:ElementRef;
    page = 4;
    page1 = 5;
    focus;
    focus1;
    focus2;
    date: {year: number, month: number};
    model: NgbDateStruct;
    constructor( private renderer : Renderer2, private viewportScroller: ViewportScroller) {}
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    ngOnInit() {
        let input_group_focus = document.getElementsByClassName('form-control');
        let input_group = document.getElementsByClassName('input-group');
        for (let i = 0; i < input_group.length; i++) {
            input_group[i].children[0].addEventListener('focus', function (){
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function (){
                input_group[i].classList.remove('input-group-focus');
            });
        }

        $(document).ready(function() {
            $('#btn-envio').click(function() {
        
                $.ajax({
                    type: "POST",
                    url: "https://api.staticforms.xyz/submit",
                    data: {
                        'name': $('#nome').val(),
                        'email': $('#email').val(),
                        'message': $('#mensagem').val(),
                        'honeypot': $('#honeypot').val(),
                        'accessKey': $('#accessKey').val(),
        
                    },
                    dataType: "json",
                    success: function(response) {
                        if (response.success == true) {
                            alert('Email enviado!');
                            
                        } else {
                            alert('ocorreu um erro ')
                            
                        }
                    }
                });
        
            });
        });
    }

}
